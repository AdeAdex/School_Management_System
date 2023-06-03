import React from 'react'

const PickClass = () => {
  return (
    <>
      <div>
        <input type="text" name="" id="" />
        <div className="col-md-12 mb-3">
            <label htmlFor="validationServer04" className="form-label">
              State
            </label>
            <select
              className="form-select "
              id="validationServer04"
              name="state"
              aria-describedby="validationServer04Feedback"
              required
              onChange={(e) => setState(e.target.value)}
            >
              <option disabled>
                Choose...
              </option>
              <option value="JSS 1">JSS 1</option>
              <option value="JSS 2">JSS 2</option>
              <option value="JSS 3">JSS 3</option>
              <option value="SSS 1">SSS 1</option>
              <option value="SSS 2">SSS 2</option>
              <option value="SSS 3">SSS 3</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
      </div>
    </>
  )
}

export default PickClass