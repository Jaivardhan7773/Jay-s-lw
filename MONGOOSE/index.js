const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();
const bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((e) => console.log(e));

// Routes


// Schema for Authentication
const ProductSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  number: Number,
  isAdmin: { type: Boolean, default: false },
  isPremium: { type: Boolean, default: false }
}, { versionKey: false });
const Authentication = mongoose.model('Auth', ProductSchema);

// this is comments schema
const CommentSchema = new mongoose.Schema({
  courseTitle: String,
  name: String,
  comment: String,
  date: { type: Date, default: Date.now }
}, { versionKey: false });
const Comment = mongoose.model('Comment', CommentSchema);

//this is for checking the server is up or not
app.get('/ping', (req, res) => {
  res.status(200).send('Server is up!');
});





//this is schema for creating a new course
const PostSchema = new mongoose.Schema({
  imageUrl: String,
  date: String,
  title: String,
  description: String,
  tags: [String],
  level : String
}, { versionKey: false });
const Post = mongoose.model('Post', PostSchema);



//this is for sign up
app.post('/SignUp', async (req, res) => {
  const { name, email, password, number } = req.body;
  if (!name || !email || !password || !number) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }

  const existingUser = await Authentication.findOne({
    $or: [{ email }, { number }]
  });

  if (existingUser) {
    return res.status(400).json({ message: 'Email or number already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new Authentication({ name, email, password: hashedPassword, number });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error: error.message });
  }
});


//this is for login and password
app.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const existingUser = await Authentication.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ message: 'User does not exist' });
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Wrong password' });
  }

  res.json({
    message: 'Login successful',
    user: existingUser,
    isLoggedIn: true,
    name: existingUser.name,
    email: existingUser.email,
    number: existingUser.number,
    isAdmin: existingUser.isAdmin
  });
});


// this is for getting courses of a perticular person
app.get('/courses/:id', async (req, res) => {
  try {
    const course = await Post.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

//and this is for creating new courses
app.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// this is for updating the courses
app.put('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// this is for deleting the courses
app.delete('/posts/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



//this is for becoming premium user
app.put('/premium' , async (req , res) => {
  const user = await Authentication.findOneAndUpdate(
    { email: req.body.email },
    { $set: { isPremium: true } },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  res.status(200).json({ message: 'you are now premium user' , user: user }); 
});

//this is for cancelling subscription
app.put('/admin/users/cancelPlan/:id', async (req, res) => {
  try {
    const user = await Authentication.findByIdAndUpdate(req.params.id, { isPremium: false }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// this is for knowing user's subscription
app.get('/premium', async (req, res) => {
  const email = req.headers.email;
  if (!email) {
    return res.status(400).json({ message: 'No email provided.' });
  }

  const user = await Authentication.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (!user.isPremium) {
    return res.status(403).json({ message: 'Access denied. Not a premium user.' });
  }

  res.json({ message: 'Access granted. Welcome, premium user!' });
});

//this is for getting course information
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



//this is for changing the course's image
app.put('/posts/:id', async (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ message: "Image URL is required" });
  }

  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    { imageUrl },
    { new: true, runValidators: true }
  );

  if (!updatedPost) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(updatedPost);
});




//this is for adding a new comment
app.post('/comments', async (req, res) => {
  const { courseTitle, name, comment } = req.body;
  try {
    const newComment = new Comment({ courseTitle, name, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


//this is for getting the comments
app.get('/comments/:courseTitle', async (req, res) => {
  try {
    const comments = await Comment.find({ courseTitle: req.params.courseTitle });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});



//this is for checking if the user is admin or not
const adminAuth = async (req, res, next) => {
  try {
    const email = req.headers.email;
    if (!email) {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const user = await Authentication.findOne({ email });
    if (user && user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


//this is for admin too
app.get('/admin/users', adminAuth, async (req, res) => {
  try {
    const users = await Authentication.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


//this is for making someone new admin
app.put('/admin/users/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, number, isAdmin } = req.body;
    const user = await Authentication.findByIdAndUpdate(id, { name, email, password, number, isAdmin }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
    } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
    }

});


//this is for removing someone from  admin's post
app.put('/admin/users/removeAdmin/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Authentication.findByIdAndUpdate(id, { isAdmin: false }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// this is for deleting a user by admin
app.delete('/admin/users/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await Authentication.findByIdAndDelete(id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});




//this is for adding  the course to a user's cart
app.post('/saveSelectedCourses', async (req, res) => {
  const { email, courseId } = req.body;

  if (!email || !courseId) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    await Authentication.updateOne(
      { email: email },
      { $addToSet: { selectedCourses: courseId } }, // Adds only if not already present
      { upsert: true }
    );
    
    res.status(200).json({ message: 'Course added successfully!' });
  } catch (err) {
    console.error('Error saving course:', err);
    res.status(500).json({ error: 'Server error' });
  }
});



//this is for getting a user's selected courses
app.get('/getSelectedCourses/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const user = await Authentication.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found', selectedCourses: [] });
    }

    res.status(200).json({ selectedCourses: user.selectedCourses || [] });
  } catch (error) {
    console.error('Error fetching user courses:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
});



//this is for deleting a user's selected courses
app.delete('/getSelectedCourses/:email/:courseId', async (req, res) => {
  const { email, courseId } = req.params;
  try {
    await Authentication.updateOne(
      { email: email },
      { $pull: { selectedCourses: parseInt(courseId) } }
  );
      res.status(200).json({ message: 'Course removed successfully' });
  } catch (error) {
      console.error('Error removing course:', error);
      res.status(500).json({ message: 'Failed to remove course' });
  }
});


//this is a query schema
const QuerySchema = new mongoose.Schema({
  name:String,
  email:String,
  website:String,
  text:String
},{versionKey:false});
const Query = mongoose.model('Query' , QuerySchema);



//this is for adding a new query
app.post('/Query' , async (req , res) => {
  const { name, email, website, text } = req.body;
  if (!name || !email || !text) {
    return res.status(400).json({ error: "Name, email, and text are required!" });
  }
  const query = new Query({ name, email, website, text });
  const savedQuery = await query.save();
  res.status(201).json(savedQuery);
})


//this is for getting all queries
app.get('/GetQuery', async (req, res) => {
  try {
    const queries = await Query.find({});  // ✅ Used correct model name
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong fetching queries!" });
  }
});



//and finally this is for
app.delete('/Query/:id' , async (req , res) => {
  const { id } = req.params;
  await Query.findByIdAndDelete(id);
  res.json({ message: 'Query deleted successfully' });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
