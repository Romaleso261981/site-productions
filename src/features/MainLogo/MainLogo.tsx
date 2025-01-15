import { Box, Flex } from '@mantine/core';

import s from './MainLogo.module.css';

export default function MainLogo() {
  return (
    <Flex className={s.imageWrapper}>
      <a href="/">
        <Box className={s.logoWrapper}>
          <svg version="1.1" viewBox="0 0 2048 934" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(0)" d="m0 0h2048v934h-2048z" fill="#F6F6F6" />
            <path
              transform="translate(481,122)"
              d="m0 0h20l28 3 24 4 17 4 30 10 20 9 16 8 14 8 22 15 11 9 10 8 7 7 2 1v2h2v2h2l7 8 9 9 7 9 10 13 10 15 10 17 12 24 10 26 8 2 1 36 2 9 11-15 9-10 2-4-5-21-9-28-8-20-10-21-13-22-8-12-12-16-9-11-8-10-12-13-7-8 2-1 9 7 9 9 8 7 9 10 12 14 11 13 12 17 10 15 9 16 11 23 12 36 1 7 10-6 16-6 21-4h26l6 1-1-9-10-34-10-25-11-25-13-25-10-17-10-15-10-14-10-13-3-4v-2h2l7 8 12 15 14 20 13 21 15 28 11 25 10 27 7 24 4 15 24 9 12 7 11 9 8 10 7 14 4 13 3 19 1 19v167h-92l-1-147-2-18-5-14-6-9-9-6-11-3h-17l-12 3-10 5-7 7-6 9-4 10-1 26-3 24-2 8-1 105-2 1h-6l-14 18-11 13-11 12-15 14-14 11-12 9-25 15-24 12-34 12-22 5-29 4-22 1-20-1-32-5-21-6-26-11-20-11-22-15-10-8-14-12-16-16-11-14-11-16-10-18-7-17v-3l3 1 8 14 14 19 9 10 7 8 18 18 14 11 15 11 22 13 25 11 21 7 22 5 25 3h30l27-3 23-5 23-7 27-12 22-12 16-11 14-11 20-18 8-8 9-11 5-7-3 1h-15l-2 4-16 17-17 16-9 7-14 10-20 12-23 11-16 6-21 6-21 4-8 1h-44l-25-4-21-6-19-7-16-8-14-8-14-10-12-11-8-7-8-8-9-11-11-15-11-19-9-19-9-27-4-21-1-10v-27l3-20 4-15 7-17 10-19 11-14 14-15 13-11 18-11 14-6 15-8 17-6 17-4 8-1h31l17 3 13 4h3l-15-10-15-8-19-7-18-4-16-2h-27l-15 2-20 5-20 8-25 13-18 13-14 11-12 12-9 11-9 12-12 20-10 23-5 21-5 30-2 19-1 18v30l1 16 1 6v8l-3-3-9-24-6-23-4-22-2-21v-19l2-22 4-23 6-22 10-27 12-23 14-22 9-11 9-10 7-8 10-10 17-13 20-13 16-8 15-7 24-8 23-5 12-2 12-1h34l22 3 25 6 21 8 22 11 19 13 16 13 11 10 9 11 10 13 12 20 9 21 7 21 3 14 2 19v26l-3 21-6 21-9 21-9 15-11 14-9 10-6 5-1 2 12-2h5l-2 5-12 14-13 11-14 9-14 7-13 5-20 5-13 2-26 1-8 1h-25l-26-5-19-7-17-9-14-10-5-4 6 9 9 11 7 8 8 7 15 12 13 8 16 8 19 8 25 7 23 3h31l19-3 19-5 20-8 16-9 17-13 10-9 8-7 7-8 2-1 1-255 4-1h52l-8-22-8-18-9-17-14-21-12-16-12-13-17-17-11-9-16-12-19-12-26-14-27-11-27-9-30-7-26-4-43-3-1-3 9-2z"
              fill="black"
            />
            <path
              transform="translate(481,122)"
              d="m0 0h20l28 3 24 4 17 4 30 10 20 9 16 8 14 8 22 15 11 9 10 8 7 7 2 1v2h2v2h2l7 8 9 9 7 9 10 13 10 15 10 17 12 24 10 26 8 2 1 36 2 9 11-15 9-10 2-4-5-21-9-28-8-20-10-21-13-22-8-12-12-16-9-11-8-10-12-13-7-8 2-1 9 7 9 9 8 7 9 10 12 14 11 13 12 17 10 15 9 16 11 23 12 36 1 7 10-6 16-6 21-4h26l6 1-1-9-10-34-10-25-11-25-13-25-10-17-10-15-10-14-10-13-3-4v-2h2l7 8 12 15 14 20 13 21 15 28 11 25 10 27 7 24 4 15 24 9 12 7 11 9 8 10 7 14 4 13 3 19 1 19v167h-92l-1-147-2-18-5-14-6-9-9-6-11-3h-17l-12 3-10 5-7 7-6 9-4 10-1 26-3 24-2 8-1 105-2 1h-6l-14 18-11 13-11 12-15 14-14 11-12 9-25 15-24 12-34 12-22 5-29 4-22 1-20-1-32-5-21-6-26-11-20-11-22-15-10-8-14-12-16-16-11-14-11-16-10-18-7-17v-3l3 1 8 14 14 19 9 10 7 8 18 18 14 11 15 11 22 13 25 11 21 7 22 5 25 3h30l27-3 23-5 23-7 27-12 22-12 16-11 14-11 20-18 8-8 9-11 5-7-3 1h-15l-2 4-16 17-17 16-9 7-14 10-20 12-23 11-16 6-21 6-21 4-8 1h-44l-25-4-21-6-19-7-16-8-14-8-14-10-12-11-8-7-8-8-9-11-11-15-11-19-9-19-9-27-4-21-1-10v-27l3-20 4-15 7-17 10-19 11-14 14-15 13-11 18-11 5-2 3 1-11 8-20 20-8 11-9 16-7 16-4 13-3 19-1 9v11l3 22 5 19 7 16 7 13 12 16 6 7 7 6 1 4 13 17 12 12 11 10 14 10 18 10 24 10 25 7 23 3h31l19-3 19-5 20-8 16-9 17-13 10-9 8-7 7-8 2-1 1-255 4-1h52l-8-22-8-18-9-17-14-21-12-16-12-13-17-17-11-9-16-12-19-12-26-14-27-11-27-9-30-7-26-4-43-3-1-3 9-2z"
              fill="#201F21"
            />
            <path
              transform="translate(1839,326)"
              d="m0 0h23l18 2 17 4 16 6 15 8 11 8 10 9 11 12 9 14 8 16 7 21 4 23 2 26v7l-1 1h-197l3 21 5 13 6 9 9 9 10 5 10 3 10 1h12l14-2 14-5 11-8 8-10 2-5 10 3 60 24-1 5-7 12-8 10-7 7-14 10-19 9-19 6-18 3-10 1h-36l-26-4-18-5-18-8-12-7-12-9-10-9-10-11-9-14-8-17-5-16-3-16-1-9v-16l2-21 4-19 8-20 8-14 10-13 11-12 12-10 15-10 19-9 18-5 17-3z"
              fill="#201E20"
            />
            <path
              transform="translate(1549,326)"
              d="m0 0h22l19 3 15 5 17 9 10 9 8 9 8 15 4 13 3 18 1 14v173h-92l-1-149-2-16-4-12-6-10-9-6-11-4h-19l-11 3-11 6-7 7-6 10-5 16-3 15-1 8-1 132h-90l-1-16v-243h85l1 49 8-13 12-14 8-8 13-9 14-7 18-5z"
              fill="#201F21"
            />
            <path
              transform="translate(469,231)"
              d="m0 0h34l22 3 25 6 21 8 22 11 19 13 16 13 11 10 9 11 10 13 12 20 9 21 7 21 3 14 2 19v26l-3 21-6 21-9 21-9 15-11 14-9 10-6 5-1 2 12-2h5l-2 5-12 14-13 11-14 9-14 7-13 5-20 5-13 2h-19l2-2 8-2 21-7 20-11 13-10 10-9 10-11 7-10 10-18 6-16 4-15 2-11v-37l-6-25-6-15-8-15-9-12-9-11-8-8-9-7-17-11-12-6-5-2-5-5-15-10-17-8-21-7-17-3-10-1h-27l-15 2-20 5-20 8-25 13-18 13-14 11-12 12-9 11-9 12-12 20-10 23-5 21-5 30-2 19-1 18v30l1 16 1 6v8l-3-3-9-24-6-23-4-22-2-21v-19l2-22 4-23 6-22 10-27 12-23 14-22 9-11 9-10 7-8 10-10 17-13 20-13 16-8 15-7 24-8 23-5 12-2z"
              fill="#019798"
            />
            <path transform="translate(1051,196)" d="m0 0h91l1 1-1 398-91-1z" fill="#201E20" />
            <path transform="translate(1215,335)" d="m0 0h91l1 1v211l-1 48h-91z" fill="#201E20" />
            <path
              transform="translate(426,347)"
              d="m0 0 3 1-11 8-20 20-8 11-9 16-7 16-4 13-3 19-1 9v11l3 22 5 19 7 16 7 13 12 16 6 7 7 6 1 4 13 17 12 12 11 10 14 10 18 10 24 10 25 7 23 3h31l19-3 19-5 20-8 16-9 17-13 10-9 8-7 7-8 3-1 1 4h40l-2 1-2 4-16 17-17 16-9 7-14 10-20 12-23 11-16 6-21 6-21 4-8 1h-44l-25-4-21-6-19-7-16-8-14-8-14-10-12-11-8-7-8-8-9-11-11-15-11-19-9-19-9-27-4-21-1-10v-27l3-20 4-15 7-17 10-19 11-14 14-15 13-11 18-11z"
              fill="#019798"
            />
            <path
              transform="translate(497,398)"
              d="m0 0h22l13 4 12 6 9 7 8 8 8 14 4 10 2 11v16l-3 13-8 16-8 10-11 9-16 8-16 3h-13l-14-3-12-5-10-7-12-12-6-11-4-9-3-15v-12l3-14 5-12 9-13 7-7 14-9 11-4z"
              fill="#F7F7F7"
            />
            <path
              transform="translate(334,568)"
              d="m0 0 3 1 8 14 14 19 9 10 7 8 18 18 14 11 15 11 22 13 25 11 21 7 22 5 25 3h30l27-3 23-5 23-7 27-12 22-12 16-11 14-11 20-18 8-8 9-11 5-7h26l-6 9-13 16-12 14-11 11-8 7-16 13-14 10-22 13-24 12-34 12-22 5-29 4-22 1-20-1-32-5-21-6-26-11-20-11-22-15-10-8-14-12-16-16-11-14-11-16-10-18-7-17z"
              fill="#019798"
            />
            <path
              transform="translate(1257,203)"
              d="m0 0 15 1 11 4 10 6 10 10 7 14 2 12-1 15-3 10-6 10-11 11-8 5-13 4h-18l-13-4-11-8-8-8-6-10-3-9-1-6v-12l3-13 7-12 10-10 10-6 10-3z"
              fill="#201F21"
            />
            <path
              transform="translate(453,16)"
              d="m0 0h42l27 2 28 4 33 7 28 8 22 8 24 10 16 8 26 14 24 16 16 12 11 9 10 9 8 7 16 16 7 8 9 11 8 10 12 17 12 19 8 14 8 16v2h-2l-11-18-10-16-16-21-11-14-11-12-7-8-22-22-11-9-13-11-18-13-14-9-16-10-23-12-27-12-31-11-24-7-27-6-27-4-23-2-29-1-31 1-30 3-29 5-32 8-36 12-26 11-27 13-24 14-14 9-17 12-16 12-13 11-12 11-8 7-12 12-7 8-9 10-13 16-14 19-12 18-17 28-14 27-11 23-8 18h-2l3-11 10-25 11-24 10-20 14-23 17-25 11-14 11-13 9-11 34-34 11-9 13-11 9-7 17-12 20-13 19-11 19-10 24-11 28-10 26-8 25-6 27-5 25-3z"
              fill="#019798"
            />
            <path
              transform="translate(481,122)"
              d="m0 0h20l28 3 24 4 17 4 30 10 20 9 16 8 14 8 22 15 11 9 10 8 7 7 2 1v2h2v2h2l7 8 9 9 7 9 10 13 10 15 10 17 12 24 10 26 2 2h-23l-3-10-11-27-11-21-14-21-12-16-12-13-17-17-11-9-16-12-19-12-26-14-27-11-27-9-30-7-26-4-43-3-1-3 9-2z"
              fill="#019798"
            />
            <path
              transform="translate(835,397)"
              d="m0 0h2l1 7v30l-3 33-5 26-6 23-7 20-10 23-10 19-2 1v-90l3-13 2-19 1-26 5-12 8-10 8-7z"
              fill="#019798"
            />
            <path
              transform="translate(1843,382)"
              d="m0 0 15 1 10 3 14 9 7 8 5 9 5 15-1 4h-102l-1-1 1-9 7-16 6-8 9-8 12-5z"
              fill="#F7F7F7"
            />
            <path
              transform="translate(184,719)"
              d="m0 0 6 5 8 11 11 14 12 14 11 12 20 20 11 9 10 9 20 15 20 14 24 14 31 16 37 15 29 9 24 6 36 6 28 3 18 1h31l20-1 33-4 29-5 35-9 21-7 33-13 25-12 20-10 20-12 22-14 7-4 2 1-15 12-23 15-17 10-27 14-29 13-25 9-34 10-39 8-21 3-41 3-44-1-31-3-24-4-36-8-37-12-29-12-32-16-23-14-16-11-16-12-16-13-12-11-24-24-9-11-14-17-10-14-10-15z"
              fill="#019798"
            />
            <path
              transform="translate(713,168)"
              d="m0 0 5 2 10 9 14 13 7 8 13 15 11 13 12 17 10 15 9 16 11 23 12 36 2 8-6 4-7 5-2-1-5-21-9-28-8-20-10-21-13-22-8-12-12-16-9-11-8-10-12-13-7-8z"
              fill="#019798"
            />
            <path
              transform="translate(819,404)"
              d="m0 0h2v31l-4 33-6 28-13 38-3 3v-48l3-13 2-19 1-26 5-12 8-10z"
              fill="#F7F7F7"
            />
            <path
              transform="translate(819,144)"
              d="m0 0h2l7 8 12 15 14 20 13 21 15 28 11 25 10 27 7 24 4 15 1 2-7-1-5-21-8-25-6-16-13-30-14-27-10-17-10-15-10-14-10-13-3-4z"
              fill="#019798"
            />
            <path
              transform="translate(800,434)"
              d="m0 0h1v23l-3 24-2 8h-1v-28l2-15z"
              fill="#019798"
            />
            <path transform="translate(788,335)" d="m0 0h1l1 36 2 11-3 4-1-2z" fill="#019798" />
          </svg>
        </Box>
      </a>
    </Flex>
  );
}
