import { ThrottleModel } from '../models/ThrottleModel.js';
import { CLIThrottleView } from '../views/CLIThrottleView.js';
import { CLIThrottleController } from '../controllers/CLIThrottleController.js';

const model = new ThrottleModel();
const view = new CLIThrottleView();
const controller = new CLIThrottleController(model, view);
controller.main();
