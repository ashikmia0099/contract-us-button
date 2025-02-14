import React from 'react';

const IntroFormVideo = () => {
    return (
        <div>
            <div className=" mt-32 border-2 border-gray-600 w-full max-w-md backdrop-blur-md bg-white/15 shrink-0 shadow-2xl rounded-xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Introduction Video</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn  text-2xl font-bold rounded-full bg-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default IntroFormVideo;