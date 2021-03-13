/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

export const Logo = () => (
  <Box
    sx={{
      a: {
        ":focus": {
          outline: "none",
        },
      },
    }}
  >
    <GatsbyLink to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
      width={260.53}
      height={160.33}
      viewBox="-15 -8 85.29 25.694"
=======
      width={216.53}
      height={93.33}
      viewBox="0 0 57.29 24.694"
>>>>>>> 8feb3550eb52c31e5db42006520e670c7f5047ef
    >
      <path
        className="prefix__st3"
        d="M.058 2.514H2.62v4.569h1.207v1.045H0V7.083h1.32V3.559H.056V2.514zM1.99 0a.844.844 0 01.574.225c.074.069.132.15.177.243a.677.677 0 01.066.3.677.677 0 01-.066.298.792.792 0 01-.436.41.842.842 0 01-.315.059.856.856 0 01-.58-.223.859.859 0 01-.177-.246.677.677 0 01-.066-.299.77.77 0 01.204-.524.792.792 0 01.256-.177A.913.913 0 011.99 0zM15.838 7.453c0 .098.01.204.03.32.018.117.044.233.073.355h-1.24a.246.246 0 01-.099-.159.867.867 0 01-.023-.188v-.169c-.061.114-.143.214-.244.299-.1.087-.212.159-.328.217-.116.058-.24.103-.368.135a1.526 1.526 0 01-.368.048c-.32 0-.621-.061-.904-.18a2.02 2.02 0 01-.741-.54 2.657 2.657 0 01-.503-.905c-.124-.362-.185-.788-.185-1.278 0-.474.063-.897.188-1.273.127-.373.296-.69.508-.95a2.2 2.2 0 01.74-.592c.281-.138.575-.206.884-.206.106 0 .217.013.331.042a1.906 1.906 0 01.934.524V.01h1.476c0 .042-.008.079-.023.105a1.079 1.079 0 01-.103.15.157.157 0 00-.035.091zm-1.304-2.196c0-.235-.016-.46-.045-.672a2.032 2.032 0 00-.162-.566.991.991 0 00-.317-.392.877.877 0 00-.519-.142c-.182 0-.333.029-.455.09-.119.06-.233.15-.341.272-.291.318-.434.83-.434 1.54 0 .336.037.619.11.85.075.23.173.415.29.555.118.14.245.243.386.304a.98.98 0 00.854-.013.902.902 0 00.339-.339c.092-.153.167-.354.217-.6.05-.241.077-.537.077-.887zM20.212 1.44c0 .32-.114.677-.342 1.07-.227.395-.574.837-1.037 1.326l-.659-.616c.106-.106.207-.214.3-.325.092-.112.174-.22.243-.323.068-.103.121-.201.161-.294a.661.661 0 00.058-.233.173.173 0 00-.053-.121c-.034-.038-.074-.077-.119-.122a2.403 2.403 0 01-.27-.275.54.54 0 01-.119-.352.843.843 0 01.241-.596.84.84 0 01.278-.18.993.993 0 01.362-.063.8.8 0 01.355.082c.114.056.217.132.307.23s.161.215.214.35c.053.132.08.28.08.441zM33.322 2.514v4.94c0 .102.01.208.031.322.022.114.048.23.077.352h-1.27a.264.264 0 01-.093-.159.867.867 0 01-.023-.188V7.6c-.08.122-.178.23-.291.323a1.892 1.892 0 01-.37.24c-.133.067-.27.117-.41.154-.141.037-.273.053-.403.053-.286 0-.542-.043-.767-.13a1.377 1.377 0 01-.572-.41 1.93 1.93 0 01-.357-.728 4.1 4.1 0 01-.122-1.074V2.514h1.291v3.513c0 .431.072.746.215.942a.674.674 0 00.569.296c.164 0 .317-.034.46-.103.143-.069.267-.164.373-.285.106-.122.188-.268.249-.437.06-.17.092-.357.092-.561V2.514zM40.751 3.307c.564-.61 1.254-.915 2.072-.915.346 0 .659.045.931.135.273.09.508.23.699.42.19.191.338.432.439.723.103.29.153.64.153 1.042v3.419h-1.251v-.506c-.207.199-.45.357-.736.477a2.238 2.238 0 01-.854.177 2.37 2.37 0 01-.831-.132 1.639 1.639 0 01-.58-.355 1.416 1.416 0 01-.34-.524 1.745 1.745 0 01-.112-.63c0-.29.06-.555.18-.796.119-.24.296-.447.53-.622.232-.174.518-.31.859-.407a4.294 4.294 0 011.18-.148h.693c-.008-.426-.092-.736-.251-.93-.162-.192-.413-.287-.754-.287-.447 0-.9.248-1.36.746zm2.585 2.368a3.716 3.716 0 00-.847.061c-.222.05-.394.117-.52.204a.697.697 0 00-.26.296.838.838 0 00-.072.331c0 .093.022.183.064.265.042.082.1.153.172.214.071.06.159.108.254.148.095.04.201.056.312.056.18 0 .341-.032.484-.098a1.61 1.61 0 00.646-.516c.071-.098.127-.183.161-.254a.8.8 0 00.07-.262c.015-.117.023-.262.023-.437zM51.673 2.514h1.453a.23.23 0 01-.021.103.433.433 0 01-.043.069c-.016.018-.029.04-.042.06a.174.174 0 00-.021.09v.061c0 .021.002.045.01.069l.503 3.514.68-3.32h.807l.773 3.306c.06-.407.108-.796.145-1.166.037-.37.064-.712.085-1.022a18.328 18.328 0 00.047-1.394v-.37h1.241c-.05.43-.106.886-.166 1.365-.061.479-.127.963-.202 1.45-.071.487-.148.97-.227 1.447-.08.479-.161.929-.246 1.352h-1.162l-.714-3.125-.675 3.125h-1.196zM17.627 16.952h2.56v4.57h1.207v1.044h-3.826v-1.045h1.32v-3.524h-1.264v-1.045zm1.934-2.514a.844.844 0 01.574.225c.074.069.132.151.177.244a.715.715 0 010 .598.792.792 0 01-.437.41.842.842 0 01-.314.058.856.856 0 01-.58-.222.859.859 0 01-.177-.246.685.685 0 01-.066-.3c0-.095.018-.187.05-.277a.702.702 0 01.154-.246.792.792 0 01.256-.178.905.905 0 01.363-.066zM29.318 16.952h3.22v5.34c0 .422-.058.785-.174 1.09a2.042 2.042 0 01-.474.745 1.894 1.894 0 01-.706.429c-.27.093-.561.138-.87.138-.371 0-.704-.08-.998-.239a2.775 2.775 0 01-.82-.695l.812-1.098a.184.184 0 01.077.052.3.3 0 01.034.077l.034.109c.014.042.04.09.077.15a1.44 1.44 0 00.333.333c.07.051.146.093.228.125a.698.698 0 00.254.048.87.87 0 00.339-.069.717.717 0 00.278-.214c.079-.098.14-.223.185-.376.045-.153.069-.339.069-.558v-4.294h-1.9v-1.093zm2.562-2.567a.858.858 0 01.582.23.854.854 0 01.182.257.737.737 0 01.07.312.7.7 0 01-.07.302.818.818 0 01-.182.251.958.958 0 01-.265.175.81.81 0 01-.635 0 .823.823 0 01-.264-.175.77.77 0 01-.247-.553.8.8 0 01.829-.799zM44.44 18.92a.123.123 0 01-.075-.045.213.213 0 01-.034-.074c-.008-.026-.013-.058-.019-.09a.493.493 0 00-.026-.103 1.327 1.327 0 00-.46-.47 1.369 1.369 0 00-.736-.189c-.198 0-.386.045-.56.133a1.394 1.394 0 00-.459.37c-.13.159-.232.347-.31.566-.076.22-.113.46-.113.723 0 .267.034.513.106.738.071.225.17.423.296.59.127.17.28.299.458.394.177.093.376.14.593.14a1.488 1.488 0 00.685-.164c.119-.058.235-.135.35-.233.113-.095.227-.211.338-.349l.762.905a2.78 2.78 0 01-1.019.767c-.37.154-.762.233-1.172.233-.4 0-.767-.074-1.1-.222a2.55 2.55 0 01-.86-.617 2.88 2.88 0 01-.564-.934 3.32 3.32 0 01-.204-1.174c0-.418.066-.81.201-1.172.133-.363.323-.678.566-.948.244-.267.538-.479.879-.635a2.722 2.722 0 011.13-.233c.227 0 .45.024.664.072.214.048.415.116.603.206.188.09.363.204.519.339.156.135.29.291.404.468zM56.832 21.892c0 .098.011.203.03.32.018.116.045.233.074.354h-1.241a.246.246 0 01-.098-.158.867.867 0 01-.024-.188v-.17c-.06.114-.143.215-.243.3-.1.087-.212.158-.328.216a1.86 1.86 0 01-.368.135 1.526 1.526 0 01-.368.048c-.32 0-.622-.061-.905-.18a2.02 2.02 0 01-.74-.54 2.657 2.657 0 01-.503-.905c-.125-.362-.186-.788-.186-1.278 0-.473.064-.897.188-1.272.127-.373.297-.69.508-.95.215-.26.46-.455.741-.593.28-.137.574-.206.884-.206.106 0 .217.013.33.042a1.906 1.906 0 01.934.524V14.45h1.477c0 .042-.008.08-.024.106a1.079 1.079 0 01-.103.15.157.157 0 00-.035.09zm-1.304-2.196c0-.236-.016-.46-.045-.672a2.032 2.032 0 00-.161-.567.991.991 0 00-.318-.391.877.877 0 00-.518-.143c-.183 0-.334.029-.455.09-.122.06-.233.15-.342.272-.29.318-.434.831-.434 1.54 0 .336.037.62.111.85.075.23.172.415.289.555a1.022 1.022 0 00.796.397.902.902 0 00.442-.106.902.902 0 00.339-.338c.092-.154.166-.355.217-.601.053-.24.08-.537.08-.886z"
      />
    </svg>
    </GatsbyLink>
  </Box>
)
