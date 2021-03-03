import { useForm } from "../lib/useForm";

export const CreateProduct = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm<{
    name: string;
    price: number;
    description: string;
  }>({
    name: "",
    price: 0,
    description: "",
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          id="price"
          name="description"
          placeholder="description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
};
