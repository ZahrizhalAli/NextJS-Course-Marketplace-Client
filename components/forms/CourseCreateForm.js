import { useState, useEffect } from "react";
import { Select, Button, Avatar, Badge } from "antd";

const { Option } = Select;

const CourseCreateForm = ({
  handleSubmit,
  handleChange,
  handleImage,
  values,
  handleImageRemove = (f) => f, // default function for REUSE COMPONENT
  editPage = false,
  setValues,
  preview,
  uploadButtonText,
}) => {
  return (
    <>
      {" "}
      {values && (
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              placeholder="Course Title"
              className="form-control"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="description"
              cols="7"
              rows="7"
              value={values.description}
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-row mb-3">
            <div className="row">
              <div className="form-group mb-3">
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  value={values.paid}
                  onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
                >
                  <Option value={true}>Paid</Option>
                  <Option value={false}>Free</Option>
                </Select>
              </div>
            </div>

            {values.paid && (
              <div className="col-md-12 ">
                <div className="form-group">
                  <input
                    type="number"
                    name="price"
                    placeholder="Course Title"
                    className="form-control"
                    value={values.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              name="category"
              placeholder="Course Category"
              className="form-control"
              value={values.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-row mb-3">
            <div className="col">
              <div className="form-group">
                <label className="btn btn-outline-secondary btn-block text-left">
                  {uploadButtonText}
                  <input
                    type="file"
                    name="image"
                    onChange={handleImage}
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
            </div>
            {preview && (
              <Badge
                count="X"
                onClick={handleImageRemove}
                className="mt-4 pointer"
              >
                <Avatar width={200} src={preview} />
              </Badge>
            )}

            {editPage && values.image && (
              <Avatar width={200} src={values.image.Location} />
            )}
          </div>

          <div className="row">
            <div className="col">
              <Button
                onClick={handleSubmit}
                disabled={values.loading || values.uploading}
                className="btn btn-primary"
                loading={values.loading}
                type="primary"
                size="large"
                shape="round"
              >
                {values.loading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </div>
        </form>
      )}{" "}
    </>
  );
};

export default CourseCreateForm;
