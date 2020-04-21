using System.Linq;
using System.Collections.Generic;
using System.Collections;
using System;
using System.Threading.Tasks;
using Amazon.S3;
using Amazon;
using Amazon.S3.Model;

namespace EmailService.Logic
{
    public class TemplateLogic : ITemplateLogic
    {
        private readonly AppSettings _appSettings;
        private readonly AmazonS3Client amazonS3Client;


        public TemplateLogic(AppSettings appSettings)
        {
            _appSettings = appSettings;
            var config = new AmazonS3Config
            {
                RegionEndpoint = RegionEndpoint.USEast1,
                ServiceURL = this._appSettings.MinioCredentials.Endpoint,
                ForcePathStyle = true
            };
            this.amazonS3Client = new AmazonS3Client(this._appSettings.MinioCredentials.AccesKey,
              this._appSettings.MinioCredentials.SecretKey, config);
            this.CheckBucket();
        }
        public async Task<string[]> getAvailableTemplates()
        {
            bool exists = await this.BucketExists();
            if (!exists)
            {
                throw new AmazonS3Exception("Bucket does not exist!");
            }
            List<string> list = new List<string>();
            ListObjectsResponse response = await amazonS3Client.ListObjectsAsync(_appSettings.MinioCredentials.BucketName);
            foreach (S3Object item in response.S3Objects)
            {
                list.Add(item.Key);
            }
            return list.ToArray();
        }

        public async Task<string> GetTemplate(string name)
        {
            bool exists = await this.BucketExists();
            if (!exists)
            {
                throw new AmazonS3Exception("Bucket does not exist!");
            }
            var item = await amazonS3Client.GetObjectAsync(_appSettings.MinioCredentials.BucketName, name);
            return "test";
        }

        private async void CheckBucket()
        {
            bool exists = await this.BucketExists();
            if (!exists)
            {
                PutBucketRequest request = new PutBucketRequest
                {
                    BucketName = _appSettings.MinioCredentials.BucketName,
                    CannedACL = S3CannedACL.PublicReadWrite
                };

                await amazonS3Client.PutBucketAsync(request);
                Console.WriteLine("Bucket " + _appSettings.MinioCredentials.BucketName + " created!");
                return;
            }
            Console.WriteLine("Bucket exists!");
        }

        private async Task<bool> BucketExists()
        {
            var response = await this.amazonS3Client.ListBucketsAsync();
            bool exists = false;
            foreach (var _bucket in response.Buckets)
            {
                exists = _bucket.BucketName == this._appSettings.MinioCredentials.BucketName;
                if (exists) { break; }
            }
            return exists;
        }
    }
}