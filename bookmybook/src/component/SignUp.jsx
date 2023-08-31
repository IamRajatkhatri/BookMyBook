import "../css/signup.css"
const SignUp = (props) => {
    return (<div>

        <section className="vh-200">
            <div>
                <div className="signup">
                    <div>
                        <div className="card text-black">
                            <div>
                                <div className="row justify-content-center">
                                    <div>

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    <label className="form-label" for="form3Example1c">Your Name</label>
                                                    <input type="text" id="form3Example1c" class="form-control" onChange={(e) => { props.settingUserName(e.target.value) }} />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                    <input type="email" id="form3Example3c" class="form-control" onChange={(e) => { props.settingEmail(e.target.value) }} />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    <label clclassNameass="form-label" for="form3Example4cd">Role</label>
                                                    <input type="password" id="form3Example4cd" class="form-control" onChange={(e) => { props.settingRole(e.target.value) }} />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    <label className="form-label" for="form3Example4c">Password</label>
                                                    <input type="password" id="form3Example4c" class="form-control" onChange={(e) => { props.settingPassword(e.target.value) }} />

                                                </div>


                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    <label className="form-label" for="form3Example4c">Mobile Number</label>
                                                    <input type="password" id="form3Example4c" class="form-control" onChange={(e) => { props.settingMobileNumber(e.target.value) }} />

                                                </div>

                                                
                                            </div>



                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={(e)=>{props.signingUp(e)}}>Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>)
}
export default SignUp;