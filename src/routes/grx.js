const express = require('express');
const Grx = require('../model/grx');

const router = express.Router();

router.post('/addGrx', async (req, res) => {
  try {
    const {
      grxKey, grxValue, platform, selector, selector_type, template, trigger_type, channel, identifier,
    } = req.body;
    const data = await Grx.create({
      grxKey,
      grxValue,
      platform,
      selector,
      selector_type,
      template,
      trigger_type,
      channel,
      identifier,
    });

    if (!data) {
      res.status(500).json({
        s: false,
        error: 'Something went wrong',
      });
    }

    res.status(200).json({
      s: true,
      msg: 'Grx added successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      s: false,
      error,
    });
  }
});

router.get('/grxList', async (req, res) => {
  try {
    const { channel } = req.query;
    let query = {};
    if (channel && channel !== 'lang') {
      query = { ...query, channel: { $in: [channel, 'lang'] } };
    }
    const data = await Grx.find(query);

    if (!data) {
      res.status(500).json({
        s: false,
        error: 'Something went wrong',
      });
    }

    res.status(200).json({
      s: true,
      msg: 'Grx List!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      s: false,
      error: 'Something went wrong',
    });
  }
});

router.get('/grxId/:id', async (req, res) => {
  try {
    const data = await Grx.findById(req.params.id);

    if (!data) {
      res.status(500).json({
        s: false,
        error: 'Something went wrong',
      });
    }

    res.status(200).json({
      s: true,
      msg: 'Grx Detail',
      data,
    });
  } catch (error) {
    res.status(500).json({
      s: false,
      error: 'Something went wrong',
    });
  }
});

router.post('/updateGrx/:id', async (req, res) => {
  try {
    const {
      grxKey, grxValue, platform, selector, selector_type, template, trigger_type, channel, identifier,
    } = req.body;
    const data = await Grx.findByIdAndUpdate(req.params.id, {
      grxKey,
      grxValue,
      platform,
      selector,
      selector_type,
      template,
      trigger_type,
      channel,
      identifier,
    });

    if (!data) {
      res.status(500).json({
        s: false,
        error: 'Something went wrong',
      });
    }

    res.status(200).json({
      s: true,
      msg: 'Grx updated successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      s: false,
      error: 'Something went wrong',
    });
  }
});

router.delete('/deleteGrx/:id', async (req, res) => {
  try {
    await Grx.findByIdAndDelete(req.params.id);
    res.status(200).json({
      s: true,
      msg: 'Grx deleted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      s: false,
      error: 'Something went wrong',
    });
  }
});

module.exports = router;
