import { useContext, useState } from 'react';
import PrimaryButton from '../../Components/Shared/Primary-button/PrimaryButton';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';

export default function RegisterPage() {
  const {createUser, updateUserProfile} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photoURL: null, // store the File, not string
  });

  const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, type, files, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "file" ? files[0] : value,
  }));
};

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.photoURL) {
      newErrors.photoURL = 'Photo is required';
    }

    return newErrors;
  };

  const uploadToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      return data.data.url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const imageUrl = await uploadToImgBB(formData.photoURL);

        // eslint-disable-next-line no-unused-vars
        const finalData = {
          ...formData,
          photoURL: imageUrl,
        };

        // sign up new user

        createUser(formData.email, formData.password)
        .then((res) =>{
          const user = res.user;
          console.log(user);

          // updating user profile
          updateUserProfile(formData.name, imageUrl)
          .then(()=>{
            console.log("user profile updated");
          })
          .catch(err => console.log(err.message));

          alert('Registration successful!');
          Navigate("/");
        })
        .catch(err =>{
          console.log("error: ", err.message);
        })

        setFormData({
          name: '',
          email: '',
          password: '',
          photoURL: null
        });
      } catch (error) {
        alert('Image upload failed. Please try again.');
        console.error(error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='flex flex-col justify-center gap-4'>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <PrimaryButton className='flex items-center justify-center gap-3' variant='outline' size='lg'>
            Sign up with Google <span><img className='w-6' src="/google.png" alt="google icon" /></span></PrimaryButton>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill in your information to register
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.password ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Photo URL Field */}
            <div>
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="file"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-400 to-orange-500 focus:outline-none transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to={"/signin"}>
                <PrimaryButton variant='primary' size='lg'>
                    Signin now
                </PrimaryButton>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}