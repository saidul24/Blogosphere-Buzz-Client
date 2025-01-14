import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import moment from "moment";


const AddBlog = () => {

    const { user } = useAuth()
    // console.log(user);
    const handleAddBlog = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value
        const short_description = form.shortDescription.value
        const long_description = form.longDescription.value
        const image = form.photoURL.value
        const bloggerEmail = form.email.value
        const bloggerName = user.displayName
        const bloggerProfilePic = user.photoURL
        const category = form.category.value
        const timeStamp = new Date()
        const displayTime = moment().format("DD MMMM, YYYY, h:mm A")


        const blog = { title, short_description, long_description, image, bloggerEmail, category, bloggerName, bloggerProfilePic, timeStamp, displayTime }
        // console.log(blog);

        // send data to the server

        axios.post('https://blogosphere-buzz-server.vercel.app/add-blog', blog)
            .then(res => {
                const data = res.data
                console.log(data);
                if (data.insertedId) {
                    form.reset()
                    toast.success("Blog Successfully added! ")
                }
            })
    }

    return (
        <div className="bg-slate-600 p-16 md:w-3/4 lg:w-1/2 mt-20 rounded-xl mx-auto">

            <h3 className="text-3xl font-extrabold text-center pb-5 "> Add Your Blog</h3>
            <form onSubmit={handleAddBlog} >

                {/* form Title and Category row */}
                <div className="  mx-auto gap-6 md:flex">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" className="input input-bordered w-full" placeholder="Enter title" required />
                    </div>
                    <div className=" form-control mx-auto">
                        {/* 
                        <input type="text" name="category" className="input input-bordered w-full" placeholder=" Enter Category " required /> */}

                        <label htmlFor=""> Category </label>

                        <select defaultValue='Travel' className=" select  input-bordered md:min-w-[215px] " name="category">
                            <option value='Travel'>Travel</option>
                            <option value='Health'>Health</option>
                            <option value='Food'>Food</option>
                            <option value='Art'>Art</option>
                            {/* <option>React</option> */}
                        </select>

                    </div>
                </div>

                {/* form Short Description  and  Long Description row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Short description</label>
                        <input type="text" name="shortDescription" className="input input-bordered w-full" placeholder=" Enter Short description" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Long Description</label>
                        <input type="text" name="longDescription" className="input input-bordered w-full" placeholder="Enter Long description" required />
                    </div>
                </div>


                {/* form photo  and User Email  row */}
                <div className="  mx-auto gap-6 md:flex my-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Photo URL</label>
                        <input type="text" name="photoURL" className="input input-bordered w-full" placeholder="Enter photoURL" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">User Email</label>
                        <input type="text" name="email" className="input input-bordered w-full" defaultValue={user?.email} disabled required />
                    </div>
                </div>

                <input type="submit" value="Add Blog" className="btn btn-outline btn-accent  w-full bg-black mt-4" />
            </form>
        </div>
    );
};

export default AddBlog;