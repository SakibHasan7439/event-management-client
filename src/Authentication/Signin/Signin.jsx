import { useContext, useState } from 'react';
import PrimaryButton from '../../Components/Shared/Primary-button/PrimaryButton';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';

export default function Signin() {
  const {signinUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // if (!formData.name.trim()) {
    //   newErrors.name = 'Name is required';
    // }
    
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
    
    if (formData.photoURL && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(formData.photoURL)) {
      newErrors.photoURL = 'Please enter a valid image URL (jpg, jpeg, png, gif, webp)';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid - you can handle the submission here
      signinUser(formData.email, formData.password)
      .then(res =>{
        console.log(res.user);
        console.log('Form submitted:', formData);
        alert('Registration successful!');
        navigate("/");
      })
      .catch(err =>{
        console.log(err.message);
      })
      
      // Reset form
      setFormData({
        email: '',
        password: '',
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='flex flex-col justify-center gap-4'>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            signin Here
          </h2>
          <PrimaryButton className='flex items-center justify-center gap-3' variant='outline' size='lg'>
            Sign up with Google <span><img className='w-6' src="/google.png" alt="google icon" /></span></PrimaryButton>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill in your information to signin
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
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
                required
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
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-400 to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Signin
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              New to our website?{' '}
              <Link to={"/signUp"}>
                <PrimaryButton variant='primary' size='lg'>Register now</PrimaryButton>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}