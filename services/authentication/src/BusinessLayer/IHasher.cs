namespace AuthenticationServer
{
    public interface IHasher
    {
        string GenerateSalt();
        string Hash(string toHash, string salt);
        bool Verify(string hash, string checking);
    }
}