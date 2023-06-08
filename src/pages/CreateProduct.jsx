import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { FormControlLabel, Switch, InputLabel, MenuItem, FormHelperText, FormControl, Select, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createProduct } from "../services/productApi";
import { getAllCategory } from "../services/category";

const CreateProduct = () => {
    const mutation = useMutation(createProduct);
    const { data: categoryList, isError, isLoading } = useQuery("getAllCategory", getAllCategory);
    const [formData, setFormData] = useState({});
    const [category, setCategory] = useState("");
    const [IsActive, setIsActive] = useState(true);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    // select category
    const handleSelect = (event) => {
        setCategory(event.target.value);
    };
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleIsActive = (event) => {
        setIsActive(event.target.checked);
    };
    console.log("form", formData);
    // console.log({ ...formData, category, IsActive });
    // image file upload
    const handleFileChange = (event) => {
        const image = event.target.files[0];
        setSelectedImageFile(image);
        setPreviewImage(URL.createObjectURL(image));
    };
    // FORM SUBMIT FUNCTION
    const handleSubmit = (event) => {
        event.preventDefault();
        let formDataWithImage = new FormData();
        formDataWithImage.append("image", selectedImageFile);
        console.log("formDataWith", formDataWithImage);

        for (let key in formData) {
            formDataWithImage.append(key, formData[key]);
        }

        formDataWithImage.append("category", category);
        formDataWithImage.append("isActive", IsActive);
        const formDataObject = Object.fromEntries(formDataWithImage);

        console.log(formDataObject);
        mutation.mutate(formDataWithImage);
    };

    return (
        <div className="w-full px-12">
            <form onSubmit={handleSubmit} className=" min-h-[500px] bg-bg_secondary rounded-2xl p-6 w-full ">
                <div className="flex gap-4 mb-5">
                    <div className="w-1/2">
                        <label for="3" class="input_label">
                            Product name
                        </label>
                        <input type="text" placeholder="name" className=" input peer" name="name" onChange={handleChange} />
                    </div>
                    <div className="w-1/2">
                        <label for="3" class="input_label">
                            SKU
                        </label>
                        <input type="text" placeholder="SKU" className="input peer" name="sku" onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-5 ">
                    <label className="input_label">Description</label>
                    <input
                        type="text"
                        placeholder="description"
                        className="input"
                        name="description"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label for="3" class="input_label">
                            Price
                        </label>
                        <input
                            type="text"
                            placeholder="price"
                            className="input peer"
                            name="price"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <label for="3" class="input_label">
                            Quantity in stock
                        </label>
                        <input
                            type="text"
                            placeholder="quantity"
                            className="input peer"
                            name="countInStock"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex gap-4 mt-12 ">
                    <div className="w-1/2">
                        <FormControlLabel control={<Switch defaultChecked />} label="isActive" onChange={handleIsActive} />
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={category}
                            label="category"
                            onChange={handleSelect}
                            sx={{ color: "gray" }}
                            defaultValue={10}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {categoryList?.category.map((item) => {
                                return (
                                    <MenuItem key={item._id} value={item._id}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText>select category</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Selected"
                            className="w-[300px] h-[150px] object-cover object-center mb-4 rounded-md"
                            name='image'
                        />
                    )}
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div className="flex justify-end">
                    <Button variant="contained" endIcon={<AddIcon />} type="submit" sx={{ bgcolor: "#ff6e40" }}>
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;
