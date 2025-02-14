import React from 'react';
// import { BorderBeam } from "../../../../components/magicui/border-beam";
import { BorderBeam } from "../../../../components/magicui/border-beam";

const ContractForm = () => {
    return (
        <div >
            <div className='flex justify-center   rounded-2xl '>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#2A99E4' width='1600' height='800' /><g fill-opacity='1'><polygon fill='#1a85cd' points='800 100 0 200 0 800 1600 800 1600 200' /><polygon fill='#166fab' points='800 200 0 400 0 800 1600 800 1600 400' /><polygon fill='#115989' points='800 300 0 600 0 800 1600 800 1600 600' /><polygon fill='#0d4367' points='1600 800 800 400 0 800' /><polygon fill='#092c44' points='1280 800 800 500 320 800' /><polygon fill='#041622' points='533.3 800 1066.7 800 800 600' /><polygon fill='#000000' points='684.1 800 914.3 800 800 700' /></g></svg>
                <div className=" bg-white/30 backdrop-blur-sm w-1/2 rounded-xl shrink-0 shadow-2xl mb-40 py-10 absolute ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered text-white" placeholder="Description"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                    <BorderBeam
                        duration={6}
                        delay={3}
                        size={400}
                        className="from-transparent via-[#cdecf8] to-transparent"
                    />
                    <BorderBeam
                        duration={6}
                        size={400}
                        className="from-transparent via-[#7280ff] to-transparent"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default ContractForm;