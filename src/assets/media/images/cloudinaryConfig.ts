import {CloudinaryImage, CloudConfig, URLConfig} from "@cloudinary/url-gen";

const cloudinaryConfig = {
    cloudConfig: new CloudConfig({        
        cloudName: 'dvwigktot',
        apiKey: '726366776456999',
        apiSecret: 'b3rnPpqlHv9-lNGzwTch7SRK12A',
    }),
    urlConfig: new URLConfig({secureDistribution:'res.cloudinary.com' , secure: true}),
};

// const cloudConfig = new CloudConfig({cloudName: 'dvwigktot'});
// const urlConfig = new URLConfig({secureDistribution:'https://res.cloudinary.com' , secure: true});
// const cloudImage = new CloudinaryImage('canal_digital/LOGO-BIOLAB-INMUNOMED_ucsly1.jpg', cloudConfig, urlConfig);

export const getCloudinaryImage = (version: string, imagePath: string): CloudinaryImage => {
    const {cloudConfig, urlConfig} = cloudinaryConfig;
    return new CloudinaryImage(`${imagePath}`, cloudConfig, urlConfig);
};
