using System;
using Minio;
using Minio.Exceptions;

namespace EmailService.Logic
{
    public class TemplateLogic : ITemplateLogic
    {
        private readonly AppSettings _appSettings;
        private readonly MinioClient minioClient;

        public TemplateLogic(AppSettings appSettings)
        {
            _appSettings = appSettings;
            this.minioClient = new MinioClient(this._appSettings.MinioCredentials.Endpoint,
             this._appSettings.MinioCredentials.AccesKey,
              this._appSettings.MinioCredentials.SecretKey);
            this.CheckBucket();
        }
        public string[] getAvailableTemplates()
        {
            return new string[] { "questionnaire" };
        }

        public string GetTemplate(string name)
        {
            throw new System.NotImplementedException();
        }

        private async void CheckBucket()
        {
            bool found = false;
            try
            {
                // Create bucket if it doesn't exist.
                found = await minioClient.BucketExistsAsync("templates");
                if (found)
                {
                    Console.WriteLine("templates already exists");
                }
            }
            catch (MinioException e)
            {
                Console.WriteLine("Error occurred: " + e);
            }
            finally
            {
                if (!found)
                {
                    await minioClient.MakeBucketAsync("templates");
                    Console.WriteLine("templates is created successfully");
                }
            }
        }
    }
}