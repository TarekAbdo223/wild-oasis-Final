// import Form from "../.. /ui/Form";
import { useQuery } from "@tanstack/react-query";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { getSettings } from "../../services/apiSettings";
import { useSettings } from "./useSettings";
import Form from "../../ui/Form";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

function UpdateSettingsForm() {
  const { isEditing, editSettings } = useEditSettings();

  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {}, // watch the empty object trick !!!!
    error,
  } = useSettings();

  console.log(
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice
  );

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    editSettings({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
