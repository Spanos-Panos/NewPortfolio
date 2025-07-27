using System;

namespace Portfolio.Shared
{
    public class SecretUnlockService
    {
        public event Action? OnUnlock;
        public void Unlock()
        {
            OnUnlock?.Invoke();
        }
    }
}
