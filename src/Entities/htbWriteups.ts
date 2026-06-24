export const htbWriteups = [
  {
    name: "Meow",
    os: "Linux",
    difficulty: "Very Easy",
    date: "2026-06-16",
    summary:
      "Introductory HTB Starting Point machine covering VPN setup, network scanning, and unauthenticated Telnet access.",
  },
  {
  name: "Fawn",
  os: "Linux",
  difficulty: "Very Easy",
  date: "2026-06-17",
  summary:
    "FTP enumeration and anonymous login on vsftpd 3.0.3. Flag retrieved via anonymous FTP access on port 21 using get command.",
},{
  name: "Dancing",
  os: "Windows",
  difficulty: "Very Easy",
  date: "2026-06-18",
  summary:
    "SMB enumeration on port 445. Nmap scan reveals open SMB ports. smbclient -L used to list shares with a blank password, revealing a WorkShares share. Connected via smbclient and navigated into the James.P folder to retrieve the flag.",
},
{
  name: "Redeemer",
  os: "Linux",
  difficulty: "Very Easy",
  date: "2026-06-19",
  summary:
    "Redis enumeration on port 6379. Wide-range nmap scan (-p 1-10000) needed to find the non-default port. Unauthenticated Redis access via redis-cli used to retrieve the flag.",
},
];
