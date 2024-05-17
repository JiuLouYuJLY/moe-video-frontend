import {memo} from "react";

const ReportIcon = memo(() => {
   return (
       <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
           <path d="M512 720m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#ceb7d5"></path>
           <path d="M480 416v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"
                 fill="#ceb7d5"></path>
           <path
               d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48z m-783.5-27.9L512 239.9l339.8 588.2H172.2z"
              fill="#ceb7d5"></path>
       </svg>
   );
});

export default ReportIcon;
