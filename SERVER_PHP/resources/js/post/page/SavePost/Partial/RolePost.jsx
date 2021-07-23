import React from "react";
import ReactFormInputValidation from "react-form-input-validation"

export default class RolePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: "",
                email: "",
                phone_number: "",
            },
            errors: {},
        };
        this.form = new ReactFormInputValidation(this, { locale: 'vi' })
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        })
        this.form.onformsubmit = (fields) => {
            // Do you ajax calls here.
			console.log(fields, "form validate success => calls here.")
			/// truyền dữ liệu từ con lên cha nếu nhảy vào sự kiện này
			props.saveFieldsToParent(fields, props )
        }
    }

	/// call validate step RolePost /// component cha gọi action xuống component con thông qua hàm tạo này
    submitStepRolePost = () => {
		this.btnRef.click()
		// this.form
		// this.form.formsubmit()
        console.log("hàm submitStepRolePost đã được gọi")
    }

    render() {
        return (
            <div className="mystep">
				<form onSubmit={this.form.handleSubmit}>
					<p>
						<label>
							Name
							<input
								type="text"
								name="name"
								onBlur={this.form.handleBlurEvent}
								onChange={this.form.handleChangeEvent}
								value={this.state.fields.name} />
						</label>
						<label className="error">
							{this.state.errors.name ? this.state.errors.name : ""}
						</label>
					</p>

					<p>
						<label>
							Email
							<input
								type="text"
								name="email"
								onBlur={this.form.handleBlurEvent}
								onChange={this.form.handleChangeEvent}
								value={this.state.fields.email}
							/>
						</label>
						<label className="error">
							{this.state.errors.email ? this.state.errors.email : ""}
						</label>
					</p>

					<p>
						<label>
							Phone
							<input
								type="tel"
								name="phone_number"
								onBlur={this.form.handleBlurEvent}
								onChange={this.form.handleChangeEvent}
								value={this.state.fields.phone_number}
							/>
						</label>
						<label className="error">
							{this.state.errors.phone_number
								? this.state.errors.phone_number
								: ""}
						</label>
					</p>
					<p>
						<button ref={ ins => { this.btnRef = ins }} type="submit">Submit</button>
					</p>
				</form>
			</div>
        );
    }
}

