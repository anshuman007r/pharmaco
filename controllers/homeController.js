import home from '../models/homeModel';


exports.getHomeData = (req, res) => {
    home.find({}, (err, home) => {
        if (err) {
            res.send(err);
        }

        res.send('Welcome to pharmaco backend');
    });
};



