/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TestController = () => import('#controllers/tests_controller')

router.on('/').renderInertia('home')

router.get('/deep', [TestController, 'verification'])
