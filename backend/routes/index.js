
import home from '../controllers/homeController'

export default (app) => {
    app.route('/')
    .get(home.getHomeData)
};
