const GROUP_NAME = 'order';

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: async (req, res) => {
            res();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '创建订单',
        }
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (req, res) => {
            res();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '支付某条订单',
            validate: {
                params: {
                    orderId: Joi.string().required(),
                }
            }
        }
    }
]