const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/tasks");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
//qzEO7iQxG64B6NOY
const mongoURI = process.env.MONGO_URL || "mongodb+srv://salahboughanmi:qzEO7iQxG64B6NOY@devo.danpz.mongodb.net/?retryWrites=true&w=majority&appName=devo";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
