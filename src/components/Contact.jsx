import React from 'react';

function Contact() {
    return (
        //  Contact Start
        <section id='contact' className='section flex justify-center items-center border-none bg-primary-darkblack'>
            {/* Text Box Start  */}
            <div className='max-w-lg px-8'>
                <span className='text-html -ml-4'>&lt;h2&gt;</span>
                <h2 className='section-heading mb-0'>Get In Touch</h2>
                <span className='text-html -ml-4 mt-1'>&lt;h2&gt;</span>
                <span className='text-html -ml-4'>&lt;p&gt;</span>
                <p>
                    I’m currently <span className='text-primary-purple'>looking</span> for <span className='text-primary-purple'>new opportunities</span>, feel free to send me a message to get in contact.
                </p>
                {/* <p>My inbox is always open. If you just have a question or want to say hi, I’ll try my best to get back to you!</p>  */}
                <span className='text-html -ml-4 mt-1'>&lt;/p&gt;</span>

                <br />
                <span className='text-html -ml-4 mb-1'>&lt;form&gt;</span>
                {/* Form Start  */}
                <form className='form-animation flex flex-col space-y-6 mt-5' action='mailto:ole.urfels@outlook.de' method='post' encType='multipart/form-data' name='emailForm'>
                    {/* Name and Email Start  */}
                    <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 w-full'>
                        <div className='relative sm:w-1/2'>
                            <input className='form-input h-9' type='text' name='name' title='Name' placeholder=' ' required />
                            <label className='form-label top-2' htmlFor='name'>
                                Name
                            </label>
                        </div>
                        <div className='relative sm:w-1/2'>
                            <input className='form-input group h-9' type='email' name='email' title='Email' placeholder=' ' required />
                            <label className='form-label top-2' htmlFor='email'>
                                Email
                            </label>
                        </div>
                    </div>
                    {/* Name and Email End  */}
                    <div className='relative'>
                        <input className='form-input h-9' type='text' name='subject' title='Subject' placeholder=' ' required />
                        <label className='form-label top-2' htmlFor='subject'>
                            Subject
                        </label>
                    </div>
                    <div className='relative flex'>
                        <textarea className='form-input resize-none' name='message' id='message' cols='30' rows='10' placeholder=' ' required></textarea>
                        <label className='form-label top-[0.85rem]' htmlFor='message'>
                            Message
                        </label>
                    </div>

                    <button className='font-sourceCodePro btn-animation group py-1 px-8 ml-auto relative' type='submit'>
                        <span className='text-primary-purple'>send</span>()
                        {/* Button Animation Start  */}
                        <div className='btn-animation__border-tb absolute inset-0 pointer-events-none border-t border-b border-primary-yellow'></div>
                        <div className='btn-animation__border absolute inset-0 pointer-events-none border border-primary-purple rounded-sm'></div>
                        {/* Button Animation End  */}
                    </button>
                </form>
                {/* Form End  */}
                <span className='block font-architectsDaughter text-sm text-primary-darklight -ml-4'>&lt;/form&gt;</span>
            </div>
            {/* Text Box End  */}
        </section>
        //  Contact End
    );
}

export default Contact;
