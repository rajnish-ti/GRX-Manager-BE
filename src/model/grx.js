const mongoose = require('mongoose');

const { Schema } = mongoose;

const GRXSchema = new Schema({
  grxKey: {
    type: String,
    required: [true, 'Property is required'],
  },
  grxValue: {
    type: String,
    required: [true, 'Value is required'],
  },
  platform: {
    type: String,
    enum: ['web', 'pwa', 'both'],
    default: 'both',
  },
  selector: {
    type: String,
    required: [true, 'Selector is required'],
  },
  selector_type: {
    type: String,
    required: [true, 'Selector Type is required'],
  },
  template: {
    type: String,
    enum: ['all', 'articleshow'],
    default: 'all',
  },
  trigger_type: {
    type: String,
    require: [true, 'Trigger type is required'],
  },
  channel: {
    type: String,
    enum: ['tml', 'nbt', 'eisamay', 'tlg', 'mly', 'mt', 'vk', 'lang', 'iag'],
    default: 'lang',
  },
  identifier: {
    type: String,
    require: [true, 'Identifier is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GRX', GRXSchema);
