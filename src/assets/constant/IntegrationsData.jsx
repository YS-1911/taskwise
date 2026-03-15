const integrationsData = [
    {
        id: 1,
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--heroicons"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
        >
            <g fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </g>
        </svg>,
        title: "Email Integration",
        description: "Sync with Gmail or Outlook to manage events directly from your inbox.",
    },
    {
        id: 2,
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--heroicons"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6Zm3-4.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"
            />
        </svg>
        ,
        title: "Task Management Tools",
        description: "Connect with apps like Trello, Asana, or Todoist to bring tasks and schedules together.",
    },
    {
        id: 3,
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--heroicons"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5Zm15.44 14.25l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"
            />
        </svg>
        ,
        title: "Video Conferencing",
        description: "Schedule and join Zoom, Microsoft Teams, or Google Meet calls with a single click.",
    },
    {
        id: 4,
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--heroicons"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 9.75a6 6 0 0 1 11.573-2.226a3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004a6.072 6.072 0 0 1-.02-.496Z"
                clipRule="evenodd"
            />
        </svg>

        ,
        title: "Cloud Storage",
        description: "Link Google Drive or Dropbox to attach files and documents to your events.",
    },
    {
        id: 5,
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--heroicons"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
        >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z" />
                <path d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
            </g>
        </svg>

        ,
        title: "CRM Platforms",
        description: "Stay on top of client meetings by syncing with Salesforce or HubSpot.",
    },
    {
        id: 6,
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--heroicons"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
        >
            <g fill="currentColor">
                <path d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3Zm-.22 5.78v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z" />
                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
            </g>
        </svg>

        ,
        title: "Smart Device Integration",
        description: "Sync with Google Home or Apple Watch for voice-activated scheduling and reminders.",
    },
]

export default integrationsData;