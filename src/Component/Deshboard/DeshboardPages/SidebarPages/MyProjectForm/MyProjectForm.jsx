import React from 'react';

const MyProjectForm = () => {
    return (
        <div>
            <div className=" mt-10 pb-10 border-2 border-gray-600 w-ful backdrop-blur-md bg-white/15 shrink-0 shadow-2xl rounded-xl">
                <form className="card-body">
                    {/*  titele */}
                    <div className=' '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Title</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                       
                    </div>
                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>
                    {/* link */}
                    <div className=' grid grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Introduction Video</span>
                            </label>
                            <input type="url" placeholder="Live Link" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Introduction Video</span>
                            </label>
                            <input type="url" placeholder="Github Link" className="input input-bordered" required />
                        </div>
                        
                       
                    </div>
                    {/* Image and video */}
                    <div className=' grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Title Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Project Short Video</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn  text-2xl font-bold rounded-full bg-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProjectForm;