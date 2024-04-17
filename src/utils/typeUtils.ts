type RemoveLeadingZeros<STR extends string> = STR extends '0' ?
    '0' :
    STR extends `0${infer TAIL}` ? RemoveLeadingZeros<TAIL> : STR // if str start with 0 apply recursion to the remaining chars


/* apply RemoveLeadingZeros to all the values of T*/
export type RemoveLeadingZeroFromList<T extends string> = T extends T ? RemoveLeadingZeros<T> : never