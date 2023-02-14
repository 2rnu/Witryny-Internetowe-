-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Lut 2023, 16:02
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `zadanie`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klient`
--

CREATE TABLE `klient` (
  `id_klienta` bigint(15) NOT NULL,
  `imie` varchar(50) DEFAULT NULL,
  `imie2` varchar(50) DEFAULT NULL,
  `nazwisko` varchar(100) DEFAULT NULL,
  `kod_pocztowy` int(5) DEFAULT NULL,
  `miejscowosc` varchar(100) DEFAULT NULL,
  `ulica` varchar(150) DEFAULT NULL,
  `nr_domu` varchar(5) DEFAULT NULL,
  `nr_mieszkania` varchar(5) DEFAULT NULL,
  `nip` bigint(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kodkreskowy`
--

CREATE TABLE `kodkreskowy` (
  `id_kodkreskowy` varchar(15) NOT NULL,
  `id_towaru` int(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `magazyn`
--

CREATE TABLE `magazyn` (
  `id_towaru` int(11) DEFAULT NULL,
  `ilosc` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `szczegoly`
--

CREATE TABLE `szczegoly` (
  `id_szczegoly` bigint(15) NOT NULL,
  `id_klienta` bigint(12) DEFAULT NULL,
  `data_zamowienia` datetime DEFAULT NULL,
  `data_sprzedazy` datetime DEFAULT NULL,
  `kwota` decimal(12,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `towar`
--

CREATE TABLE `towar` (
  `id_towaru` int(7) NOT NULL,
  `nazwa` varchar(150) DEFAULT NULL,
  `opis` varchar(225) DEFAULT NULL,
  `cena_zakupu` decimal(10,2) DEFAULT NULL,
  `cena_sprzedaży` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamównienie`
--

CREATE TABLE `zamównienie` (
  `id_szczegoly` bigint(15) DEFAULT NULL,
  `id_towaru` int(7) DEFAULT NULL,
  `ilosc` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klient`
--
ALTER TABLE `klient`
  ADD PRIMARY KEY (`id_klienta`);

--
-- Indeksy dla tabeli `kodkreskowy`
--
ALTER TABLE `kodkreskowy`
  ADD PRIMARY KEY (`id_kodkreskowy`);

--
-- Indeksy dla tabeli `szczegoly`
--
ALTER TABLE `szczegoly`
  ADD PRIMARY KEY (`id_szczegoly`),
  ADD KEY `fk_sz_k` (`id_klienta`);

--
-- Indeksy dla tabeli `towar`
--
ALTER TABLE `towar`
  ADD PRIMARY KEY (`id_towaru`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `szczegoly`
--
ALTER TABLE `szczegoly`
  MODIFY `id_szczegoly` bigint(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `towar`
--
ALTER TABLE `towar`
  MODIFY `id_towaru` int(7) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `szczegoly`
--
ALTER TABLE `szczegoly`
  ADD CONSTRAINT `fk_sz_k` FOREIGN KEY (`id_klienta`) REFERENCES `klient` (`id_klienta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
