/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 17, 2017
 */
const ROOT = '/';
const LOGIN = '/login';
const LOGOUT = '/logout';
const FORGOT = '/forgot';
const RESET_TOKEN = '/reset/:token';
const SIGN_UP = '/user';
const CONTACT = '/contact';
const ACCOUNT = '/account';
const ACCT_PROFILE = '/account/profile';
const ACCT_PASSWORD = '/account/password';
const ACCT_DEL = '/account/delete';
const ACCT_UNLINK = '/account/unlink/:provider';
const USERNAME = '/:username';

const KIEMBAP = '/kiembap';


const R = {
  ROOT,
  LOGIN,
  LOGOUT,
  FORGOT,
  RESET_TOKEN,
  SIGN_UP,
  CONTACT,
  ACCOUNT,
  ACCT_PROFILE,
  ACCT_PASSWORD,
  ACCT_DEL,
  ACCT_UNLINK,
  USERNAME,
  KIEMBAP
};

module.exports = R;
