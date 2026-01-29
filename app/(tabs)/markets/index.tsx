import { MarketsSegmentTabs } from "@/components/MarketsSegmentTabs";
import { MarketsTopBar } from "@/components/MarketsTopBar";
import { QuoteCard, type Quote } from "@/components/QuoteCard";
import { ScreenBackground } from "@/components/ScreenBackground";
import { SideMenu } from "@/components/SideMenu";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

type SortKey = "symbol" | "lastPrice" | "change";
type SortDir = "asc" | "desc";

const DUMMY_QUOTES: Quote[] = [
  {
    symbol: "GOOG",
    name: "Alphabet Inc.",
    lastPrice: 336.65,
    time: "02:25",
    change: 1.64,
    changePercent: 0.49,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    lastPrice: 256.83,
    time: "02:25",
    change: -1.44,
    changePercent: -0.56,
  },
  {
    symbol: "BTC-USD",
    name: "Bitcoin",
    tag: "CRYPTO",
    lastPrice: 88994.0,
    time: "02:25",
    change: -325.68,
    changePercent: -0.36,
  },
  {
    symbol: "^DJI",
    name: "Dow Jones Industrial",
    lastPrice: 49035.59,
    time: "02:25",
    change: 32.18,
    changePercent: 0.07,
  },
  {
    symbol: "^IXIC",
    name: "NASDAQ Composite",
    lastPrice: 23879.18,
    time: "02:25",
    change: 62.08,
    changePercent: 0.26,
  },
  {
    symbol: "^GSPC",
    name: "S&P 500",
    lastPrice: 6982.66,
    time: "02:25",
    change: 4.06,
    changePercent: 0.06,
  },
  {
    symbol: "SPY",
    name: "SPDR S&P 500",
    lastPrice: 695.92,
    time: "02:25",
    change: 0.21,
    changePercent: 0.03,
  },
];

function getSortValue(q: Quote, key: SortKey) {
  switch (key) {
    case "symbol":
      return q.symbol;
    case "lastPrice":
      return q.lastPrice;
    case "change":
      return q.change;
  }
}

export default function MarketsQuotesScreen() {
  const [sortKey, setSortKey] = useState<SortKey>("symbol");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [menuOpen, setMenuOpen] = useState(false);

  const sorted = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;
    return [...DUMMY_QUOTES].sort((a, b) => {
      const av = getSortValue(a, sortKey);
      const bv = getSortValue(b, sortKey);

      if (typeof av === "string" && typeof bv === "string") {
        return av.localeCompare(bv) * dir;
      }
      return (Number(av) - Number(bv)) * dir;
    });
  }, [sortKey, sortDir]);

  function onPressSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    setSortDir("asc");
  }

  const sortArrow = sortDir === "asc" ? "▲" : "▼";

  return (
    <ScreenBackground>
      <StatusBar style="light" />

      <MarketsTopBar title="My Portfolio" onPressMenu={() => setMenuOpen(true)} />

      <MarketsSegmentTabs
        active="quotes"
        onChange={(k) => {
          if (k === "quotes") return;
          router.replace(`/(tabs)/markets/${k}`);
        }}
      />

      <View className="px-5 pt-4 pb-2">
        <View className="flex-row items-center">
          <Pressable
            accessibilityRole="button"
            onPress={() => onPressSort("symbol")}
            className="flex-1 flex-row items-center"
          >
            <Text className="text-light-200 text-[12px] font-semibold tracking-[3px]">
              TICKER
            </Text>
            {sortKey === "symbol" ? (
              <Text style={{ color: "#A8B5DB", marginLeft: 6, fontSize: 10 }}>
                {sortArrow}
              </Text>
            ) : null}
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => onPressSort("lastPrice")}
            className="w-32 flex-row items-center justify-end"
          >
            <Text className="text-light-200 text-[12px] font-semibold tracking-[3px]">
              LAST PRICE
            </Text>
            {sortKey === "lastPrice" ? (
              <Text style={{ color: "#A8B5DB", marginLeft: 6, fontSize: 10 }}>
                {sortArrow}
              </Text>
            ) : null}
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => onPressSort("change")}
            className="w-24 flex-row items-center justify-end"
          >
            <Text className="text-light-200 text-[12px] font-semibold tracking-[3px]">
              CHANGE
            </Text>
            {sortKey === "change" ? (
              <Text style={{ color: "#A8B5DB", marginLeft: 6, fontSize: 10 }}>
                {sortArrow}
              </Text>
            ) : null}
          </Pressable>
        </View>
      </View>

      <FlatList
        data={sorted}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => <QuoteCard quote={item} />}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 6,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      />

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </ScreenBackground>
  );
}

