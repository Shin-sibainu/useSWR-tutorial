"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

const ProfileWithUseEffect = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(`https://jsonplaceholder.typicode.com/users/1`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json() as Promise<User | null>;
          }
          throw new Error(`Some Error`);
        })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          setError(err.message);
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  if (error) return <div>Load is Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-blue-300 w-64 py-4 px-6 rounded-md shadow-md">
      <span>お名前 : </span>
      <div>{user?.name}</div>
      <span>メールアドレス :</span>
      <div>{user?.email}</div>
    </div>
  );
};

export default ProfileWithUseEffect;
