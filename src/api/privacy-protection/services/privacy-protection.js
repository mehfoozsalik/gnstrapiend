'use strict';

/**
 * privacy-protection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::privacy-protection.privacy-protection');
