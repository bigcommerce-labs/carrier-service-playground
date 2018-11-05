import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable } from 'rxjs';

@Injectable()
export class AWSS3Service {
    // Move config to constants later.
    private config = {
        region: 'us-east-2',
        bucketName: 'carrierservice',
    };

    private bucket;
    constructor() {
        this.bucket = new S3({
            region: this.config.region,
            accessKeyId: 'AKIAJOIXDI6BLGX4ICUA',
            secretAccessKey: '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',
        });
    }

    uploadImage(value: any): Observable<string> {
        const file = value.target.files[0];
        const payload = {
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            Bucket: this.config.bucketName,
        };
        return Observable.create((observer) => {
            this.bucket.upload(payload, (err: any, data: any) => {
                if (err) {
                    return err;
                }
                observer.next(data.Location);
            });
        });
    }
}
