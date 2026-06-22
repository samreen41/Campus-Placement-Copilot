const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {

    try {

        const resume = new Resume({

            filename: req.file.filename,

            originalname: req.file.originalname,

            filepath: req.file.path

        });

        await resume.save();

        res.json({

            success: true,

            message: "Resume uploaded successfully",

            data: resume

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    uploadResume

};