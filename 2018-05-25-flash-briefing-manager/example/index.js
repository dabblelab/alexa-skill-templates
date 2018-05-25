const config = require('./config.js');
const aws = require('aws-sdk');
const items = require('./media/items.json');
const uuidv4 = require('uuid/v4');

aws.config.update({
    "region": config.region,
    "accessKeyId": config.accessKeyId,
    "secretAccessKey": config.secretAccessKey
});

publishFlashBriefing();

async function publishFlashBriefing() {
    try {
        const first = await processItems();
        const second = await publishFeed().then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err);
        });

    } catch (ex) {
        console.log(ex);
    }
}

function publishFeed() {
    return new Promise(function (resolve, reject) {
        const s3 = new aws.S3();

        const feed = [];
        items.forEach(item => {

            const feedItem = {
                "uid": "urn:uuid:" + uuidv4(),
                "updateDate": new Date(item.pubDate).toISOString(),
                "titleText": item.itemTitle,
                "mainText": item.itemTitle,
                "streamUrl": `https://s3.amazonaws.com/${config.bucketName}/${item.fileName}`,
                "redirectionUrl": item.redirectionUrl
            };

            feed.push(feedItem);
        });

        const item = {
            Bucket: config.bucketName,
            Key: 'feed.json',
            ACL: "public-read",
            ContentType: 'application/json',
            Body: JSON.stringify(feed)
        };

        s3.upload(item, function (err, data) {
            if (err) reject(err);

            resolve(`Feed published to: https://s3.amazonaws.com/${config.bucketName}/feed.json`);
        });
    });

}

function processItems() {
    // const promises = items.map(item => uploadMedia(item));
    // return Promise.all(promises)
    let promise = Promise.resolve();
    items.forEach(element => {
        promise = promise.then(() => uploadMedia(element));
    });
    return promise;
}

function uploadMedia(params) {

    return new Promise(function (resolve, reject) {

        const stream = require('fs').createReadStream(`./media/${params.fileName}`);

        const s3 = new aws.S3();

        const expireDate = new Date(params.pubDate);

        const item = {
            Bucket: config.bucketName,
            Key: params.fileName,
            ACL: "public-read",
            ContentType: 'audio/mpeg',
            //Expires : expireDate.setDate(expireDate.getDate() + 5).toISOString(),
            Body: stream
        };

        s3.upload(item, function (err, data) {
            if (err) return reject(err);

            const feedItem = {
                "uid": "urn:uuid:" + uuidv4(),
                "updateDate": new Date(params.pubDate).toISOString(),
                "titleText": params.itemTitle,
                "mainText": null,
                "streamUrl": `https://s3.amazonaws.com/${config.bucketName}/${params.fileName}`,
                "redirectionUrl": params.redirectionUrl
            };

            resolve(feedItem);
        });

    });

}