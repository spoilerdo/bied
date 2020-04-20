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
        public string[] getAvailableTemplates()
        {
            return null;
        }

        public string GetTemplate(string name)
        {
            throw new System.NotImplementedException();
        }

        private async void CheckBucket()
        {
            var bucket = await this.amazonS3Client.ListBucketsAsync();
            bool exists = bucket.Buckets.Where(x => x.BucketName == "templates") != null;
            if (!exists)
            {
                PutBucketRequest request = new PutBucketRequest
                {
                    BucketName = "templates",
                    CannedACL = S3CannedACL.PublicReadWrite
                };

                await amazonS3Client.PutBucketAsync(request);
                Console.WriteLine("Bucket templates created!");
                return;
            }
            Console.WriteLine("Bucket exists!");
        }
    }
}