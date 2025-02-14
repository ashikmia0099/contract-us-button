import React from 'react';

const ContractMeForm = () => {
    return (
        <div>
            <div className=" mt-10 pb-10 border-2 border-gray-600 w-ful backdrop-blur-md bg-white/15 shrink-0 shadow-2xl rounded-xl">
                <form className="card-body px-40">
                    {/*  titele and Image*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered w-full" required />
                    </div>
                    {/* email */}
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>

                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn  text-2xl font-bold rounded-full bg-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContractMeForm;