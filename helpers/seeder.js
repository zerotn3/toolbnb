/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 17, 2017
 */
const User = require('../models/User');

const _createUsers = () => {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const admin = new User({
      email: 'admin@khoinghieponline.com',
      username: 'admin',
      password: '123789',
      profile: {
        name: 'Administrator',
        gender: 'Male',
        phone: '+841234567899',
      },
      deleteFlag: false,
      activeFlag: true,
      admin: true,
      publish: false,
    });

    User.create([admin], (error) => {
      if (!error) {
        console.log('First Users were created successfully!');
      }
    });
  });
};

module.exports = {
  createUsers: _createUsers
};