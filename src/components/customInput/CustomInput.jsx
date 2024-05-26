export const CustomInput = ({ label, inputRef, ...rest }) => {
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col">
          {" "}
          <label className="form-label rounded">{label}</label>
        </div>
        <div className="col">
          {" "}
          <input {...rest} ref={inputRef} className="rounded" />
        </div>
      </div>
    </div>

    // <Form.Group classNameName="mb-3">
    //   <Form.Label>{label}</Form.Label>
    //   <Form.Control {...rest} ref={inputRef} />
    // </Form.Group>
  );
};
