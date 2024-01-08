import { useState } from "react";
import { Button, Flex, Text, Input, Label } from "@aws-amplify/ui-react";
import "../components/resForm.css";

export const ResInput = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    time: "12:00 PM",
    date: "",
  });

  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log("aHAH", name, typeof value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeSelection = (selectedTime: string) => {
    setFormData({
      ...formData,
      time: selectedTime,
    });
    setShowTimePicker(false);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ee1b0zf1c9.execute-api.us-east-2.amazonaws.com/default/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Reservation Submitted Successfully");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          date: "",
          time: "12:00 PM",
        });
      } else {
        console.log("Error Submitting Reservation Form");
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const timeOptions = ["12:00 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"];

  return (
    <>
      <h1 className="resTitle">Boat Adventure Reservation</h1>
      <Flex
        as="form"
        direction="column"
        className="form"
        onSubmit={handleSubmit}
      >
        <Flex direction="column">
          <Label display="block" htmlFor="date">
            Select a Date
          </Label>
          <Input
            value={formData.date}
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
          />

          <Label display="block" htmlFor="selectedTime">
            Selected Time
          </Label>
          <div style={{ position: "relative" }}>
            <Input
              id="selectedTime"
              name="selectedTime"
              type="text"
              value={formData.time}
              onClick={() => setShowTimePicker(!showTimePicker)}
              readOnly
            />

            {showTimePicker && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "100%",
                  left: 0,
                  width: "100%",
                  border: "1px solid #ccc",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                {timeOptions.map((time) => (
                  <div
                    className="highlight-on-hover"
                    key={time}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleTimeSelection(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Label display="block" htmlFor="first_name">
            First Name
            <Text as="span" fontSize="small" color="font.error"></Text>
          </Label>
          <Input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            isRequired={true}
            onChange={handleChange}
          />

          <Label display="block" htmlFor="last_name">
            Last Name
            <Text as="span" fontSize="small" color="font.error"></Text>
          </Label>
          <Input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            isRequired={true}
            onChange={handleChange}
          />

          <Label display="block" htmlFor="email">
            Email
            <Text as="span" fontSize="small" color="font.error"></Text>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            isRequired={true}
            onChange={handleChange}
          />
        </Flex>
        <Button variation="primary" type="submit">
          Submit
        </Button>
      </Flex>
    </>
  );
};
