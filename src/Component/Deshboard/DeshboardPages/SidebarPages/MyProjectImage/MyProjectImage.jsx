import React from 'react';

const MyProjectImage = () => {
    return (
        <div className=" mt-32 border-2 border-gray-600 w-full max-w-md backdrop-blur-md bg-white/15 shrink-0 shadow-2xl rounded-xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Project Scroll Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full " />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn  text-2xl font-bold rounded-full bg-none">Submit</button>
                    </div>
                </form>
            </div>
    );
};

export default MyProjectImage;