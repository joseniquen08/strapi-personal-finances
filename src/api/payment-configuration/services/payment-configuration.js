'use strict';

/**
 * payment-configuration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-configuration.payment-configuration');
