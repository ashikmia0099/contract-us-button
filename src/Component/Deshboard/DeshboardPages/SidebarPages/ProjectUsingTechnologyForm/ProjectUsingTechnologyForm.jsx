import React from 'react';

const ProjectUsingTechnologyForm = () => {
    return (
        <div>
            <div className=" mt-10 pb-10 border-2 border-gray-600 w-ful backdrop-blur-md bg-white/15 shrink-0 shadow-2xl rounded-xl">
                <form className="card-body">
                    {/*  titele and Image*/}
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Technolgy Name</span>
                            </label>
                            <select className=' select select-bordered text-white'>
                                <option className='text-white' value="" disabled>Bistro boss</option>
                                <option className='text-white' value="">CRick Sport</option>
                                <option className='text-white' value="">Bistro boss</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Technology Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full" />
                        </div>
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

export default ProjectUsingTechnologyForm;