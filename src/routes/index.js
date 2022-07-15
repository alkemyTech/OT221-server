const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth")
const organizationsRoutes = require('./organization')
const newsRoutes = require('./news');
const contactRoutes = require('./contact');
const activitiesRoutes = require('./activities');
const memberRoutes = require('./member')
const testimonialsRoutes = require('./testimonials')
const categoriesRoutes = require('./categories')


router.use("/users", usersRoutes)

router.use("/auth", authRoutes);

router.use("/organizations", organizationsRoutes)

router.use("/news", newsRoutes);
router.use("/testimonials",testimonialsRoutes)
router.use("/contacts", contactRoutes)

router.use("/activity", activitiesRoutes);
router.use("/categories", categoriesRoutes)



router.use("/members", memberRoutes);




module.exports = router;
