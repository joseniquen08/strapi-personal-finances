'use strict';

/**
 * payment-reminder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-reminder.payment-reminder');
